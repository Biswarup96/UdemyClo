import getCoursesByCategory from "@/app/actions/getCourses";
import CourseCard from "@/components/courses/CourseCard";
import Categories from "@/components/custom/Categories";
import { db } from "@/lib/db";

const CoursesByCategory = async ({
  params,
}: {
  params: { categoryId: string };
}) => {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const courses = await getCoursesByCategory(params.categoryId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Categories Navigation */}
        <div className="mb-12">
          {/* <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Categories</h2> */}
          <Categories 
            categories={categories} 
            selectedCategory={params.categoryId} 
            className="bg-white shadow-sm rounded-lg p-1 border border-gray-200"
          />
        </div>

        {/* Courses Grid */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900">
            {categories.find(c => c.id === params.categoryId)?.name || 'Selected'} Courses
          </h2>
          <p className="text-lg text-center text-gray-600 ">
            Professional development courses to advance your skills
          </p>

          {courses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map((course) => (
                <CourseCard 
                  key={course.id} 
                  course={course}
                  className="hover:transform hover:-translate-y-1 transition-all duration-200"
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No courses found in this category
              </h3>
              <p className="text-gray-500">
                We could not find any courses matching this category. Check back later!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesByCategory;