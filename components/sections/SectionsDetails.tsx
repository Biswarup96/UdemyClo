"use client";

import {
  Course,
  MuxData,
  Progress,
  Purchase,
  Resource,
  Section,
} from "@prisma/client";
import toast from "react-hot-toast";
import { useState, useRef } from "react";
import axios from "axios";
import { File, Loader2, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import ReadText from "@/components/custom/ReadText";
import MuxPlayer from "@mux/mux-player-react";
import Link from "next/link";
import ProgressButton from "./ProgressButton";
import SectionMenu from "../layout/SectionMenu";

interface SectionsDetailsProps {
  course: Course & { sections: Section[] };
  section: Section;
  purchase: Purchase | null;
  muxData: MuxData | null;
  resources: Resource[] | [];
  progress: Progress | null;
}

const SectionsDetails = ({
  course,
  section,
  purchase,
  muxData,
  resources,
  progress,
}: SectionsDetailsProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formAnswer, setFormAnswer] = useState<string>("");
  const formRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const isLocked = !purchase && !section.isFree;

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formAnswer === "yes") {
      try {
        setIsLoading(true);
        router.push(`/learning`);
      } catch (err) {
        console.error("Navigation error:", err);
        toast.error("Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    } else {
      toast("No worries! You can buy it anytime.");
    }
  };

  return (
    <section className="px-6 md:px-8 py-12 flex flex-col gap-10 bg-white rounded-xl shadow-sm max-w-6xl mx-auto border border-gray-100">
      {/* Title & Top Actions */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            {section.title}
          </h1>
          <p className="text-gray-600 text-base">
            Part of{" "}
            <Link 
              href={`/courses/${course.id}`}
              className="font-medium text-primary hover:underline"
            >
              {course.title}
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <SectionMenu course={course} />
          {!purchase ? (
            <Button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md hover:from-indigo-700 hover:to-blue-700 transition-all"
              size="lg"
            >
              Enroll in Course
            </Button>
          ) : (
            <ProgressButton
              courseId={course.id}
              sectionId={section.id}
              isCompleted={!!progress?.isCompleted}
            />
          )}
        </div>
      </div>

      {/* Description */}
      <div className="prose prose-lg max-w-none text-gray-700">
        <ReadText value={section.description || ""} />
      </div>

      {/* Video Player or Lock Message */}
      <div className="w-full flex justify-center">
        {isLocked ? (
          <div className="w-full md:max-w-2xl flex flex-col items-center gap-4 px-8 py-10 bg-blue-50 border border-blue-200 rounded-xl text-center">
            <div className="p-4 bg-white rounded-full shadow-sm border border-blue-100">
              <Lock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Premium Content Locked
            </h3>
            <p className="text-gray-600 max-w-md">
              Enroll in the course to access all videos, resources, and materials.
            </p>
            <Button 
              onClick={scrollToForm}
              className="mt-2"
              variant="outline"
            >
              Unlock Content
            </Button>
          </div>
        ) : (
          <div className="w-full aspect-video max-w-4xl rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <MuxPlayer 
              playbackId={muxData?.playbackId || ""}
              className="w-full h-full"
            />
          </div>
        )}
      </div>

      {/* Resource Files */}
      {resources.length > 0 && (
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <span className="p-2 bg-blue-100 rounded-lg">
              <File className="h-5 w-5 text-blue-600" />
            </span>
            Learning Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource) => (
              <Link
                key={resource.id}
                href={resource.fileUrl}
                target="_blank"
                className="flex items-center gap-4 p-4 bg-white hover:bg-gray-50 rounded-lg border border-gray-200 shadow-xs transition-all hover:shadow-sm group"
              >
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition">
                  <File className="h-5 w-5 text-gray-600 group-hover:text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {resource.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {resource.fileUrl.split('.').pop()?.toUpperCase()} File
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Purchase Form */}
      {!purchase && (
        <div
          ref={formRef}
          className="mt-12 border-t border-gray-200 pt-12 bg-gray-50 p-8 rounded-xl"
        >
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Ready to Enroll?
              </h2>
              <p className="text-gray-600 text-lg">
                Gain full access to all course materials and resources
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                  <input
                    type="radio"
                    name="decision"
                    value="yes"
                    checked={formAnswer === "yes"}
                    onChange={() => setFormAnswer("yes")}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <label className="block text-lg font-medium text-gray-900">
                      Yes, enroll me in this course
                    </label>
                    <p className="text-gray-500 text-sm">
                      Get immediate access to all content
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                  <input
                    type="radio"
                    name="decision"
                    value="no"
                    checked={formAnswer === "no"}
                    onChange={() => setFormAnswer("no")}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <label className="block text-lg font-medium text-gray-900">
                      Not right now
                    </label>
                    <p className="text-gray-500 text-sm">
                      I will consider it later
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full py-6 text-lg font-medium"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "Continue to Enrollment"
                )}
              </Button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionsDetails;