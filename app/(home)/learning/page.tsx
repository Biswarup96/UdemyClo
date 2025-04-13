import CourseCard from "@/components/courses/CourseCard";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LearningPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  const courses = await db.course.findMany({
    where: {
      isPublished: true,
    },
    include: {
      category: true,
      subCategory: true,
      sections: {
        where: { isPublished: true },
        orderBy: { position: "asc" },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf7f0] via-white to-[#f5f0e6] px-4 py-12 md:px-10 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center shadow-lg">
              <span className="text-2xl">🎓</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Your Learning Portfolio
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Continue your educational journey with these professional courses
          </p>
        </div>

        {courses.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl shadow-sm max-w-2xl mx-auto p-8 border border-gray-100">
            <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mb-6">
              <span className="text-3xl">📚</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              No Courses Yet
            </h3>
            <p className="text-gray-500 text-center mb-6">
              You have not enrolled in any courses yet. Discover our catalog to start learning.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all">
              Browse Courses
            </button>
          </div>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course}
                className="hover:transform hover:-translate-y-1 transition-all duration-200"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningPage;