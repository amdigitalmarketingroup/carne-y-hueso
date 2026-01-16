export interface Dish {
    id: string;
    name: string;
    description: string;
    price: string;
    category: "Raw" | "Butcher's Cut" | "Sides" | "Libations";
    image: string;
}

export const menuItems: Dish[] = [
    // RAW BAR
    {
        id: "1",
        name: "Bone Marrow & Toast",
        description: "Roasted bone marrow, parsley salad, caper relish, grilled sourdough.",
        price: "$24",
        category: "Raw",
        image: "https://images.unsplash.com/photo-1544025162-d76690b60943?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "2",
        name: "Wagyu Carpaccio",
        description: "A5 Japanese Wagyu, truffle aioli, shaved parmesan, arugula.",
        price: "$32",
        category: "Raw",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "3",
        name: "Steak Tartare",
        description: "Hand-cut filet mignon, cured egg yolk, mustard seed, cornichon.",
        price: "$28",
        category: "Raw",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "4",
        name: "Oysters mignonette",
        description: "Daily selection, champagne vinegar, shallots, cracked pepper.",
        price: "$22",
        category: "Raw",
        image: "https://images.unsplash.com/photo-1553531087-b25a0b9a68ab?auto=format&fit=crop&q=80&w=800",
    },

    // BUTCHER'S CUT
    {
        id: "5",
        name: "Dry Aged Ribeye",
        description: "45-day dry aged bone-in ribeye (22oz), maldon salt, confit garlic.",
        price: "$120",
        category: "Butcher's Cut",
        image: "https://images.unsplash.com/photo-1558030006-4506719337d0?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "6",
        name: "Tomahawk",
        description: "Grilled tomahawk steak (32oz), rosemary butter, thyme.",
        price: "$180",
        category: "Butcher's Cut",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "7",
        name: "Filet Mignon",
        description: "Center cut tenderloin (8oz), red wine reduction.",
        price: "$65",
        category: "Butcher's Cut",
        image: "https://images.unsplash.com/photo-1600891965058-2270908759fa?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "8",
        name: "Lamb Rack",
        description: "Herb crusted rack of lamb, mint chimichurri.",
        price: "$58",
        category: "Butcher's Cut",
        image: "https://images.unsplash.com/photo-1628269550798-258079b7681a?auto=format&fit=crop&q=80&w=800",
    },

    // SIDES
    {
        id: "9",
        name: "Truffle Mashed",
        description: "Yukon gold potatoes, black truffle butter, chives.",
        price: "$18",
        category: "Sides",
        image: "https://images.unsplash.com/photo-1619894991049-2e6e22e519c7?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "10",
        name: "Grilled Asparagus",
        description: "Charred asparagus, lemon zest, shaved parmesan.",
        price: "$16",
        category: "Sides",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "11",
        name: "Wild Mushrooms",
        description: "Sautéed wild mushrooms, garlic, herbs.",
        price: "$19",
        category: "Sides",
        image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?auto=format&fit=crop&q=80&w=800",
    },

    // LIBATIONS
    {
        id: "12",
        name: "The Antidote",
        description: "Mezcal, activated charcoal, lime, agave, spicy rim.",
        price: "$18",
        category: "Libations",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16549766b?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "13",
        name: "Blood & Sand",
        description: "Scotch, cherry heering, sweet vermouth, orange juice.",
        price: "$16",
        category: "Libations",
        image: "https://images.unsplash.com/photo-1538902517006-03738bea2786?auto=format&fit=crop&q=80&w=800",
    },
];
