// app/404.jsx
import GroupNavbar from "@/components/common/GroupNavbar";
import Footer from "@/components/common/Footer";
import NotFound from "@/components/common/NotFound";

const Custom404 = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center bg-white text-green-900 overflow-hidden">
        <GroupNavbar always={true}/>
        {/* Floating Leaves */}
        <NotFound />

        {/* Footer */}
      </div>
      <Footer />
    </>
  );
};

export default Custom404;
