export default function handler(req, res) {

const stores = [
{
domain: "gymshark.com",
traffic_score: 9800,
is_online: true,
is_ecommerce: true
},
{
domain: "fashionnova.com",
traffic_score: 9200,
is_online: true,
is_ecommerce: true
},
{
domain: "examplestore.com",
traffic_score: 1200,
is_online: true,
is_ecommerce: true
}
]

res.status(200).json({
stores: stores
})

}
