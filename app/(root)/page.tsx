import sampleData from "@/db/sample-data"
import ProductList from "@/components/shared/product/product-list";

const delay = (ms: number | undefined) => new Promise((resolve) => setTimeout(resolve, ms));


export const metadata = {
    title: "Home",
    description: "prostore"
}

const Homepage = async () => {
    await delay(2000)
    console.log(sampleData)
    return (
        <>
            <ProductList data={sampleData.products} title="Newest Arrivals" limit={4}/>
        </>)

}
export default Homepage