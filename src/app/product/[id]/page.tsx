import { notFound } from "next/navigation";
import { prisma } from "../../../../prisma/prisma-client"
import { Container } from "@/components/shared";
import { ProductImage } from "@/components/shared/product-image";

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
    const product = await prisma.product.findFirst({ where: { id: Number(id) }});

    if(!product){
        return notFound();
    }
    return <Container className="flex flex-col my-10">
        <div>
        <ProductImage imageUrl={product.imageUrl} size={40}  className="" /> 

        </div>
    </Container>
}
  