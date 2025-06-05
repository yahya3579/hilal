import { ArrowRight } from "lucide-react"
import NewsLetterArrow from '../assets/NewsLetterArrow.svg'
export default function NewsletterSubscription() {
    return (
        <div className=" mx-auto">
            {/* Top Ad Space */}
            <div className="bg-black text-white text-center mx-2 my-4 ">
                <p className="text-lg font-medium h-[102px]">Ad space</p>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-white p-4 mb-4">
                <h3 className="text-[#F65050] text-[24px] oswald font-medium mb-2">Subscribe to our News Letter</h3>
                <div className="w-full h-px bg-gray-300 mb-3"></div>
                <p className="text-[#393939] text-[15px] font-[275px] mb-4">
                    SUBSCRIBE to our newsletter to get latest news, popular news and exclusive updates.
                </p>
                <div className="flex">
                    <input
                        type="email"
                        placeholder="E-mail Address"
                        className="flex-1 border border-gray-300 px-3 py-2 text-sm bg-[#D9D9D9] focus:outline-none focus:border-red-500"
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
            <div className="bg-black text-white text-center mx-2">
                <p className="text-lg font-medium h-[330px]">Ad space</p>
            </div>
        </div>
    )
}
