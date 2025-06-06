import { ArrowRight } from "lucide-react"
import NewsLetterArrow from '../../assets/NewsLetterArrow.svg'
export default function NewsletterSubscription() {
    return (
        <div className=" mx-auto ">
            {/* Top Ad Space */}
            <div className="bg-black  text-white text-center mx-2 mt-4 ">
                <p className="text-lg font-medium h-[102px]">Ad space</p>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-white px-4 py-4 pb-8 mb-4 mx-2  shadow-[0px_4px_4px_4px_#00000010]">
                <h3 className="text-[#F65050] text-[24px] oswald font-medium mb-3">Subscribe to our News Letter</h3>
                <div
                    className="h-[1px] w-[93%]"
                    style={{
                        backgroundSize: "100% 100%",
                        backgroundImage: "linear-gradient(to right, #dc2626 20%, black 20%)",
                    }}
                />
                <p className="text-[#393939] text-[15px] font-[275px] mb-4 mt-8 leading-loose ">
                    SUBSCRIBE to our newsletter to get latest news, popular news and exclusive updates.
                </p>
                <div className="flex">
                    <input
                        type="email"
                        placeholder="E-mail Address"
                        className="flex-1 border h-[44px] border-gray-300 px-3 py-2 text-sm bg-[#D9D9D9] focus:outline-none focus:border-red-500"
                    />
                    <button
                        type="button"
                        className="bg-red-600 text-white px-3 py-2 flex items-center justify-center hover:bg-red-700"
                    >
                        <img src={NewsLetterArrow} alt="" />
                    </button>
                </div>
            </div>

            {/* Bottom Ad Space */}
            <div className="bg-black text-white text-center mt-9 mx-2">
                <p className="text-lg font-medium h-[330px]">Ad space</p>
            </div>
        </div>
    )
}
