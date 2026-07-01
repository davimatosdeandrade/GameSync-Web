import { Search } from "lucide-react";

interface SearchInputProps {
    "placeholder": string
}

export default function SearchInput({ placeholder }: SearchInputProps) {
    return(
        <div className="relative w-full h-40px">
            <Search className="absolute text-c1 top-[11px] right-[11px]" size={18} />
            <input
                type="text"
                placeholder={placeholder}
                className="w-full h-full outline-0 pl-[10px] pr-[40px] shadow-[0_0_0_2px] shadow-c1 rounded-[10px] bg-c0 text-c5"
            />
        </div>
    )
}