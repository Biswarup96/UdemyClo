import { db } from "@/lib/db";
import { Course, Section } from "@prisma/client";
import Link from "next/link";
import { Progress } from "../ui/progress";
import { CheckCircle, PlayCircle } from "lucide-react";
import clsx from "clsx";

interface CourseSideBarProps {
  course: Course & { sections: Section[] };
  studentId: string;
}

const CourseSideBar = async ({ course, studentId }: CourseSideBarProps) => {
  const publishedSections = await db.section.findMany({
    where: {
      courseId: course.id,
      isPublished: true,
    },
    orderBy: {
      position: "asc",
    },
  });

  const publishedSectionIds = publishedSections.map((section) => section.id);

  const purchase = await db.purchase.findUnique({
    where: {
      customerId_courseId: {
        customerId: studentId,
        courseId: course.id,
      },
    },
  });

  const completedSections = await db.progress.findMany({
    where: {
      studentId,
      sectionId: {
        in: publishedSectionIds,
      },
      isCompleted: true,
    },
  });

  const completedSectionIds = completedSections.map((s) => s.sectionId);

  const progressPercentage =
    publishedSectionIds.length > 0
      ? (completedSectionIds.length / publishedSectionIds.length) * 100
      : 0;

  return (
    <aside className="hidden md:flex flex-col w-72 min-h-screen border-r bg-white shadow-md px-5 py-8">
      {/* Course Title */}
      <div className="mb-6 text-center">
        <h1 className="text-xl font-bold text-gray-800">{course.title}</h1>
        {purchase && (
          <div className="mt-3">
            <Progress value={progressPercentage} className="h-2 rounded-full" />
            <p className="text-xs text-gray-500 mt-1">
              {Math.round(progressPercentage)}% completed
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-3">
        <Link
          href={`/courses/${course.id}/overview`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-yellow-50 transition font-medium text-gray-700"
        >
          <PlayCircle className="h-4 w-4 text-yellow-500" />
          Overview
        </Link>

        {publishedSections.map((section) => {
          const isCompleted = completedSectionIds.includes(section.id);
          return (
            <Link
              key={section.id}
              href={`/courses/${course.id}/sections/${section.id}`}
              className={clsx(
                "flex items-center gap-3 px-4 py-2 rounded-lg transition-all",
                "hover:bg-yellow-50 text-gray-700 font-medium group",
                isCompleted && "bg-green-50"
              )}
            >
              <span className="flex-1 truncate">{section.title}</span>
              {isCompleted && (
                <CheckCircle className="h-4 w-4 text-green-500 group-hover:scale-105 transition-transform" />
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default CourseSideBar;
