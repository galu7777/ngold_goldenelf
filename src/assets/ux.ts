export const changeNavbarColor = () => {
    const navbar = document.getElementById("nav");
    if (window.scrollY >= 88) {
      navbar?.classList.add(
        "bg-black/[0.5]",
        "backdrop-blur-md",
        "backdrop-brightness-75",
      );
      navbar?.classList.remove("h-[5rem]");
    } else {
      navbar?.classList.remove(
        "bg-black/[0.5]",
        "backdrop-blur-md",
        "backdrop-brightness-75",
        "h-[5rem]"
      );
      navbar?.classList.add("h-[5rem]");
    }
  };

export const displayLastNumbers = (str:string)=>{
    return str.slice(0,2) + "..." + str.slice(-4)
}  