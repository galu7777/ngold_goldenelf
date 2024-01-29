export const changeNavbarColor = () => {
    const navbar = document.getElementById("nav");
    if (window.scrollY >= 88) {
      navbar?.classList.add(
        "bg-black/[0.5]",
        "backdrop-blur-md",
        "backdrop-brightness-75",
      );
      navbar?.classList.remove("h-[15vh]");
    } else {
      navbar?.classList.remove(
        "bg-black/[0.5]",
        "backdrop-blur-md",
        "backdrop-brightness-75",
        "h-[15vh]"
      );
      navbar?.classList.add("h-[12vh]");
    }
  };

export const displayLastNumbers = (str:string)=>{
    return str.slice(0,2) + "..." + str.slice(-4)
}  