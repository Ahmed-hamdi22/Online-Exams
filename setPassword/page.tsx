import NavLinks from "@/components/navLinks/page";
import SetPassword from "@/components/setPassword/SetPassword";
import PageUi from "@/components/Uipage/page";

export default function page() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[100px] h-screen">
        <div className="hidden md:block ">
         <PageUi/>
        </div>
        <div>
          <div className="pt-[40px] md:pt-[80px] pr-[20px] md:pr-[70px]">
            <NavLinks />
          </div>
          <div className="pl-[10px] pr-[30px] py-[60px] md:pl-[20px] md:pr-[200px] md:py-[31px]">
            <SetPassword/>
          </div>
        </div>
      </div>
    </>
  )
}


