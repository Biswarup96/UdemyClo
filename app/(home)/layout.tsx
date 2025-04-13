import Carsouelcomp from "@/components/layout/Carsouelcomp"
import Footer from "@/components/layout/Footer"
import Topbar from "@/components/layout/Topbar"

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Topbar />
      <Carsouelcomp/>
      {children}
      <Footer/>
    </>
  )
}

export default HomeLayout