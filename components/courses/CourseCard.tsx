import { db } from "@/lib/db";
import { clerkClient } from "@clerk/nextjs/server";
import { Course } from "@prisma/client";
import { Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CourseCard = async ({ course }: { course: Course }) => {
  const instructor = await clerkClient.users.getUser(course.instructorId);

  let level;

  if (course.levelId) {
    level = await db.level.findUnique({
      where: {
        id: course.levelId,
      },
    });
  }

  return (
    <Link
      href={`/courses/${course.id}/overview`}
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 w-[320px]"
    >
      <Image
        src={course.imageUrl || "/image_placeholder.webp"}
        alt={course.title}
        width={320}
        height={180}
        className="w-full h-[180px] object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="px-4 py-3 flex flex-col gap-3">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors duration-200 line-clamp-2">
          {course.title}
        </h2>

        {/* Instructor + Level */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          {/* Instructor Info */}
          {instructor && (
            <div className="flex items-center gap-2">
              <Image
                src={instructor.imageUrl || "/avatar_placeholder.jpg"}
                alt={instructor.fullName || "Instructor photo"}
                width={28}
                height={28}
                className="rounded-full border"
              />
              <span className="line-clamp-1">{instructor.fullName}</span>
            </div>
          )}

          {/* Level */}
          {level && (
            <div className="flex items-center gap-1 text-yellow-600 font-medium">
              <Gem size={18} />
              <span>{level.name}</span>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="text-base font-semibold text-gray-800">
          ${course.price}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
