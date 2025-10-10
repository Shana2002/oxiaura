import GroupNavbar from "@/components/common/GroupNavbar";
import Footer from "@/components/common/Footer";
import NotFound from "@/components/common/NotFound";


const UnderConstruction = () => {
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
  )
}

export default UnderConstruction