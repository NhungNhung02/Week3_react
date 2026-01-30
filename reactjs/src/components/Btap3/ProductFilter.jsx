import { useState, useMemo } from "react";

/* Mock 3000 sản phẩm */
const products = Array.from({ length: 3000 }, (_, i) => ({  // _ -> giá trị không dùng đến
    id: i,
    name: `Product ${i}`,
    price: Math.floor(Math.random() * 1000) + 1,
}));

function ProductFilter() {
    const [search, setSearch] = useState("");
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");

    /*  Chưa tối ưu */
    console.time("No memo");
    const noMemoList = products.filter(
        (p) =>
            p.name.toLowerCase().includes(search.toLowerCase()) &&
            (min === "" || p.price >= min) &&
            (max === "" || p.price <= max)
    );
    const noMemoTotal = noMemoList.reduce((s, p) => s + p.price, 0);
    console.timeEnd("No memo");

    /* ✅ Dùng useMemo */
    console.time("With memo");
    const filteredList = useMemo(() => {
        return products.filter(
            (p) =>
                p.name.toLowerCase().includes(search.toLowerCase()) &&
                (min === "" || p.price >= min) &&
                (max === "" || p.price <= max)
        );
    }, [search, min, max]);

    const total = useMemo(
        () => filteredList.reduce((s, p) => s + p.price, 0),
        [filteredList]
    );
    console.timeEnd("With memo");

    return (
        <div style={{ padding: 20 }}>
            <h3>Bài 3 – Product Filter</h3>

            <input placeholder="Tên" onChange={(e) => setSearch(e.target.value)} />
            <input placeholder="Giá min" onChange={(e) => setMin(e.target.value)} />
            <input placeholder="Giá max" onChange={(e) => setMax(e.target.value)} />

            <p>Số SP: {filteredList.length}</p>
            <p>Tổng tiền: {total}</p>
        </div>
    );
}

export default ProductFilter;