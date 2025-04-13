import { Course, Section } from "@prisma/client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";

interface SectionMenuProps {
  course: Course & { sections: Section[] };
}

const SectionMenu = ({ course }: SectionMenuProps) => {
  return (
    <div className="z-60 md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 text-sm px-4 py-2.5 
              border border-[#FDAB04]/30 bg-white hover:bg-[#FFF8EB]
              rounded-lg shadow-md hover:shadow-lg transition-all
              text-[#2F2F2F] hover:text-[#FDAB04]"
          >
            <Menu className="w-5 h-5" />
            <span className="font-semibold">Course Sections</span>
          </Button>
        </SheetTrigger>

        <SheetContent 
          side="left" 
          className="w-80 bg-[#FFFDF9] border-r border-[#FDAB04]/10 px-0"
        >
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="px-6 pb-4 border-b border-[#FDAB04]/10">
              <h2 className="text-xl font-bold text-[#2F2F2F] pt-4 flex items-center gap-2">
                <span className="text-[#FDAB04]">📖</span>
                {course.title}
              </h2>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <div className="space-y-2">
                <Link
                  href={`/courses/${course.id}/overview`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl
                    text-[#2F2F2F] hover:bg-[#FDAB04]/10 transition-colors
                    hover:translate-x-2 transform duration-200"
                >
                  <span className="text-lg">🏠</span>
                  <span className="font-medium">Course Overview</span>
                </Link>

                {course.sections.map((section) => (
                  <Link
                    key={section.id}
                    href={`/courses/${course.id}/sections/${section.id}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl
                      text-[#2F2F2F] hover:bg-[#FDAB04]/10 transition-colors
                      hover:translate-x-2 transform duration-200
                      group relative"
                  >
                    <span className="text-lg">📚</span>
                    <span className="font-medium">{section.title}</span>
                    
                    {/* Active state indicator */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <div className="w-2 h-2 bg-[#FDAB04] rounded-full 
                        opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Footer */}
            <div className="px-6 pt-4 pb-6 border-t border-[#FDAB04]/10">
              <p className="text-sm text-[#2F2F2F]/80">
                {course.sections.length} sections • Complete at your own pace
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SectionMenu;