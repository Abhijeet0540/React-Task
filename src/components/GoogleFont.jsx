import React, { useEffect, useState } from "react";
import { CiBag1 } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { MdFontDownload } from "react-icons/md";
import { FaAnglesDown } from "react-icons/fa6";
import { PuffLoader } from "react-spinners";
import { TiDeleteOutline } from "react-icons/ti";

const GoogleFont = () => {
    const [FontData, setFontData] = useState([]);
    const [selectedFont, setSelectedFont] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [DisplayFonts, setDisplayFonts] = useState([]);


    // Fetch Google Fonts
    const fetchGoogleFonts = async () => {
        // if (FontData.length === 0) {
        try {
            const res = await fetch(
                "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCc_okSYNQHdhy51fIDuU2INuP4eo9llpY");
            const data = await res.json();
            // only show 200 fonts
            if (data.items.length > 0) {
                setFontData(data.items.slice(0, 900));
                setLoading(false);
            }
            // console.log(data);
        } catch (error) {
            console.error("Failed to fetch Google Fonts:", error);
            setLoading(false);
        }
        // }
    };

    // Load font dynamically
    const loadFont = (font) => {
        const link = document.createElement("link");
        link.href = `https://fonts.googleapis.com/css2?family=${font.family.replace(" ", "+")}&display=swap`;
        link.rel = "stylesheet";
        document.head.appendChild(link);

    }


    // Handle font selection with async function
    const hendelFind = (font) => {
        const findData = FontData.find((data) => data.family === font);
        if (findData) {
            setSelectedFont(findData.family);
            loadFont(findData.family);
        }

    };

    // Filter fonts
    const filteredFonts = FontData.filter((font) =>
        font.family.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        if (!loading) {
            const fontsToLoad = FontData.slice(0, 200);
            fontsToLoad.forEach(loadFont);
            setDisplayFonts(fontsToLoad);
        }
    }, [FontData, loading]);


    // Fetch fonts on component mount 
    useEffect(() => {
        fetchGoogleFonts();
    }, []);


    return (
        <div className="w-screen lg:h-screen  bg-[#EEE2B5] pt-5">
            <div className="flex justify-between w-screen lg:px-10 px-5 Sm:flex-col Sm:items-center Sm:justify-between ">
                <h1 className="lg:text-5xl font-bold w-20 font-['Galaksi'] text-3xl text-[#D4AC0D] gap-5 ">Font</h1>
                <div className="flex items-center gap-5  ">
                    <div className="flex items-center gap-2 rounded-full border-[1px] border-[#D4AC0D] pl-2 sm:w-full ">
                        <IoIosSearch className="text-3xl font-bold px-1 text-[#D4AC0D] hover:text-[#f0ac0d] hover:scale-110 hover:transform duration-300 rotate-90" />
                        <input
                            className="lg:w-[60vw] lg:h-[6vh] w-[40vw] h-[2vh] px-4 py-5 rounded-full bg-transparent bo focus:outline-none placeholder:text-black"
                            type="text"
                            placeholder="Enter Your Text"
                        />
                    </div>
                    <span className="text-3xl font-bold text-zinc-900">
                        <CiBag1 className="text-5xl font-bold px-1 text-[#D4AC0D] hover:text-[#f0ac0d] hover:scale-110 hover:transform duration-300" />
                    </span>
                </div>
            </div>


            <div className="flex flex-col lg:flex-row items-center lg:items-start py-10 px-5 sm:px-10 justify-between">

                <div className="relative w-full sm:w-[70vw] lg:w-[50vw] flex flex-col mb-10 lg:mb-0">
                    <div className="flex items-center">
                        <label className="text-2xl sm:text-3xl font-bold text-zinc-900 px-4 py-5 font-['AQIRA']">
                            See our fonts
                        </label>
                        <FaAnglesDown className="text-3xl font-bold px-1 text-[#D4AC0D] hover:text-[#f0ac0d] hover:scale-110 hover:transform duration-300 rotate-[270deg]" />
                    </div>
                    <p className="w-full sm:w-[70vw] lg:w-[40vw] lg:mt-5 text-[1rem] sm:text-[1.2rem] lg:text-[1.3rem] px-4 py-5 text-zinc-100 rounded-lg bg-[#3D5300] drop-shadow-md max-h-[65vh] overflow-y-scroll"
                        style={{ fontFamily: selectedFont }}
                    >
                        Where does it come from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Hampden-Sydney College in
                        Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the
                        cites of the word in classical literature, discovered the
                        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                        1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
                        Evil) by Cicero, written in 45 BC. This book is a treatise on the
                        theory of ethics, very popular during the Renaissance. The first
                        line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a
                        line in section 1.10.32.
                    </p>
                </div>

                <div className="relative w-full lg:w-[50vw] flex flex-col justify-center items-center ">
                    {/* Input and Search */}
                    <div className="flex sm:flex-row items-center rounded-lg py-2 gap-2 w-full justify-between px-4">
                        <input
                            type="text"
                            className="border-[1px] border-[#fab12f] text-lg sm:text-2xl lg:text-3xl font-bold w-full sm:w-[70vw] lg:w-[40vw] h-[6vh] sm:h-[7vh] lg:h-[8vh] text-black bg-transparent px-4 py-3 rounded-lg focus:outline-none placeholder:text-black"
                            placeholder="Search Your Font"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <TiDeleteOutline style={{ display: !searchTerm ? 'none' : 'block' }} onClick={() => setSearchTerm('')} className="absolute align-middle right-[16%] text-3xl font-bold text-red-700 w-5 sm:w-7 h-5 sm:h-7  hover:scale-110 transform duration-300" />
                        <IoIosSearch
                            className="rotate-60  font-bold text-zinc-900 w-8 sm:w-10 h-8 sm:h-10 border-[1px] border-[#FAB12F] px-2 py-1 rounded-full hover:bg-[#FAB12F] hover:scale-110 transform duration-300"
                            onClick={fetchGoogleFonts}
                        />
                    </div>


                    <div className="cardBody w-full relative  sm:w-[80vw] lg:w-[45vw] lg:h-[65vh] h-[50vh] sm:h-[60vh]  mt-5 px-4 py-5 rounded-lg overflow-y-scroll">
                        <PuffLoader color="#f0ac0d" size={100} loading={loading} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

                        <div className="flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <p style={{ display: loading ? "none" : "block" }} className="text-2xl font-bold text-zinc-900 e">{filteredFonts.length === 0 && "font not found"}</p>
                        </div>
                        {filteredFonts.map((item, index) => (
                            <div key={index} className="my-2" >

                                <div
                                    onClick={() => hendelFind(item.family)}
                                    className="flex w-full items-center gap-2 font-bold text-5xl border-[1px] border-[#FAB12F] px-2 py-1 rounded-full hover:bg-[#FAB12F] hover:scale-[1.02] transform duration-300 scroll-smooth focus:scroll-auto"
                                >

                                    <div className="p-3 text-3xl font-bold text-zinc-900">
                                        <MdFontDownload />
                                    </div>

                                    <div style={{ fontFamily: item.family }} className="flex flex-col text-sm font-bold text-zinc-900 px-1 py-2 leading-[25px]">
                                        <div className="flex items-center gap-2">
                                            <h1>Font-Family:</h1>
                                            <p className="truncate max-w-[20vw]">{item.family}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <h2 className="ps-4">Category:</h2>
                                            <p className="truncate max-w-[20vw]">{item.category}</p>
                                        </div>
                                        {/* <div className="flex w-full">
                                            <h3 className="ps-[3.3vh]">Regular:</h3>
                                            <p className="truncate px-2 max-w-[30vw]">
                                                {item.files.regular}
                                            </p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleFont;



// --- every font family show and apply them self in ui ---