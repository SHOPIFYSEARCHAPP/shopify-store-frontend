import { useEffect, useState } from "react";

export default function Home() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const api = process.env.NEXT_PUBLIC_API_URL || "https://YOUR_API_URL";
    fetch(`${api}/stores`)
      .then((r) => r.json())
      .then((data) => {
        setStores(data || []);
      })
      .catch(() => {
        setStores([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Inter, Arial, sans-serif" }}>
      <h1 style={{ margin: 0 }}>Shopify Stores</h1>
      <p style={{ color: "#666" }}>Sıralama: trafik (yüksek → düşük)</p>

      {loading ? (
        <div>Loading…</div>
      ) : (
        <div style={{ marginTop: 18 }}>
          {stores.length === 0 && <div>No stores found</div>}
          {stores.map((s, i) => (
            <div
              key={s.domain || i}
              style={{
                padding: 14,
                borderBottom: "1px solid #eee",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{s.domain}</div>
                <div style={{ fontSize: 13, color: "#666" }}>
                  {s.is_ecommerce ? "E-commerce" : "Not confirmed e-commerce"} • shopId: {s.shopify_id || "—"}
                </div>
              </div>

              <div style={{ textAlign: "right" }}>
                <div style={{ fontWeight: 700 }}>{s.traffic_score ?? "-"}</div>
                <div style={{ fontSize: 12, color: "#666" }}>{s.is_online ? "Online" : "Offline"}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
