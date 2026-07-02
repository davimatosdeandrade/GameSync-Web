import { Search } from "lucide-react";

interface SearchInputProps {
    "placeholder": string
}

export default function SearchInput({ placeholder }: SearchInputProps) {
    return(
        <div className="relative w-[calc((100%-40px)/5)] h-[37px]">
            <Search className="absolute text-placeholder top-[12px] right-[12px]" size={14} />
            <input
                type="text"
                placeholder={placeholder}
                className="w-full h-full bg-bg2 text-[14px] font-[400] outline-0 pl-[10px] pr-[40px] shadow-[0_0_0_2px] shadow-button rounded-full text-placeholder"
            />
        </div>
    )
}