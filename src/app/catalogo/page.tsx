import Button from "@/src/components/Button";
import CardProduct from "@/src/components/CardProduct";
import { Product } from "@/src/types/product";
import { ChevronDown } from "lucide-react";

export const mockProducts: Product[] = [
    {
        id: 1,
        name: "Dead by Daylight",
        image: "/test/t1.jpg",
        lowest_price: 49.90,
        highest_price: 49.90,
    },
    {
        id: 2,
        name: "Assassin's Creed Odyssey",
        image: "/test/t2.jpg",
        lowest_price: 109.90,
        highest_price: 140.90,
    },
    {
        id: 3,
        name: "Minecraft Bedrock Edition",
        image: "/test/t3.jpg",
        lowest_price: 109.90,
        highest_price: 109.90,
    },
    {
        id: 4,
        name: "God of War",
        image: "/test/t4.jpg",
        lowest_price: 47.50,
        highest_price: 47.50,
    },
    {
        id: 5,
        name: "The Crew Motorfest",
        image: "/test/t5.jpg",
        lowest_price: 109.90,
        highest_price: 140.90,
    },
    {
        id: 6,
        name: "The Texas Chain Saw Massacre",
        image: "/test/t6.jpg",
        lowest_price: 109.90,
        highest_price: 109.90,
    },
    {
        id: 7,
        name: "Grand Theft Auto V",
        image: "/test/t7.jpg",
        lowest_price: 89.90,
        highest_price: 89.90,
    },
    {
        id: 8,
        name: "Dark Souls III",
        image: "/test/t8.jpg",
        lowest_price: 95.00,
        highest_price: 95.00,
    },
    {
        id: 9,
        name: "Elden Ring",
        image: "/test/t9.jpg",
        lowest_price: 199.90,
        highest_price: 249.90,
    },
    {
        id: 10,
        name: "EA Sports FC 25",
        image: "/test/t10.jpg",
        lowest_price: 179.90,
        highest_price: 229.90,
    },
    {
        id: 11,
        name: "Red Dead Redemption 2",
        image: "/test/t11.jpg",
        lowest_price: 89.90,
        highest_price: 119.90,
    },
    {
        id: 12,
        name: "Doom",
        image: "/test/t12.jpg",
        lowest_price: 79.90,
        highest_price: 99.90,
    },
    {
        id: 13,
        name: "Ori and the will of the wisps",
        image: "/test/t13.jpg",
        lowest_price: 75.00,
        highest_price: 75.00,
    },
    {
        id: 14,
        name: "Star Wars Jedi: Fallen Order",
        image: "/test/t14.jpg",
        lowest_price: 249.90,
        highest_price: 299.90,
    },
    {
        id: 15,
        name: "Overcooked! 2",
        image: "/test/t15.jpg",
        lowest_price: 29.90,
        highest_price: 89.90,
    },
    {
        id: 16,
        name: "Rivals of Aether",
        image: "/test/t16.jpg",
        lowest_price: 99.90,
        highest_price: 129.90,
    },
    {
        id: 17,
        name: "Slackers: Carts of Glory",
        image: "/test/t17.jpg",
        lowest_price: 89.90,
        highest_price: 89.90,
    },
    {
        id: 18,
        name: "Cuphead",
        image: "/test/t18.jpg",
        lowest_price: 95.00,
        highest_price: 95.00,
    },
    {
        id: 19,
        name: "SpeedRunners",
        image: "/test/t19.jpg",
        lowest_price: 199.90,
        highest_price: 249.90,
    },
    {
        id: 20,
        name: "Duck Game",
        image: "/test/t20.jpg",
        lowest_price: 179.90,
        highest_price: 229.90,
    },
    {
        id: 21,
        name: "Tomb Raider",
        image: "/test/t21.jpg",
        lowest_price: 89.90,
        highest_price: 119.90,
    },
    {
        id: 22,
        name: "Rounds",
        image: "/test/t22.jpg",
        lowest_price: 79.90,
        highest_price: 99.90,
    },
    {
        id: 23,
        name: "Hollow Knight: Silksong",
        image: "/test/t23.jpg",
        lowest_price: 75.00,
        highest_price: 75.00,
    },
    {
        id: 24,
        name: "Hytale",
        image: "/test/t24.jpg",
        lowest_price: 249.90,
        highest_price: 299.90,
    },
    {
        id: 25,
        name: "Broforce",
        image: "/test/t25.jpg",
        lowest_price: 29.90,
        highest_price: 89.90,
    },
    {
        id: 26,
        name: "007 Legends",
        image: "/test/t26.jpg",
        lowest_price: 99.90,
        highest_price: 229.90,
    },
    {
        id: 27,
        name: "Bully",
        image: "/test/t27.jpg",
        lowest_price: 89.90,
        highest_price: 89.90,
    },
    {
        id: 28,
        name: "Dead Space 2",
        image: "/test/t28.jpg",
        lowest_price: 95.00,
        highest_price: 95.00,
    },
];

export default function CatalogoPage() {
    return (
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-[10px]">
            <Button 
                icon={<ChevronDown size={18} />} 
                text="Plataforma"
                size="featured"
            />
            <Button 
                icon={<ChevronDown size={18} />} 
                text="Ativação"
                size="featured"
            />
            <Button 
                icon={<ChevronDown size={18} />} 
                text="Sistema"
                size="featured"
            />
            <Button 
                icon={<ChevronDown size={18} />} 
                text="Tipo"
                size="featured"
            />
            <Button 
                icon={<ChevronDown size={18} />} 
                text="Categorias"
                size="featured"
            />
            <Button 
                icon={<ChevronDown size={18} />} 
                text="Distribuidor"
                size="featured"
            />
            <Button 
                icon={<ChevronDown size={18} />} 
                text="Preço"
                size="featured"
            />
            {mockProducts.map((product) => (
                <CardProduct 
                    key={product.id} 
                    product={product} 
                    size="default" 
                />
            ))}
        </main>
    );
}
