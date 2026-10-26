import { Search } from "lucide-react";

interface SearchInputProps {
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ placeholder, value, onChange, onKeyDown }: SearchInputProps) {
    return (
        <div className="relative h-[37px] min-w-[calc((100vw-40px)/5)] rounded-full transition duration-300 bg-main2 shadow-[0_0_0_2px] 
            shadow-button hover:shadow-icon text-text2 hover:text-icon hover:cursor-pointer focus-within:shadow-icon focus-within:text-icon">
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                className="w-full h-full bg-bg2 text-[14px] font-[400] outline-0 pl-[10px] pr-[40px] rounded-full text-title 
                placeholder:text-placeholder"
            />
            <Search className="absolute top-[12px] right-[12px]" size={14} />
        </div>
    );
}
