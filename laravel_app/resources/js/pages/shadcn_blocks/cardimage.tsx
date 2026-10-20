import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Product } from "@/types"
import { Link } from '@inertiajs/react'
import products from '@/routes/products';

type CardImageProps = {
    product: Product;
};

export function CardImage({product} : CardImageProps) {

  console.log("product.id:", product.id)
  console.log("href:", `/product/${product.id}`)

  return (
    <Card className="relative mx-auto w-full h-full max-w-sm pt-0">
      <img
        src={product.image}
        alt={product.name}
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader className="h-full">
        <CardAction>
          {/*<Badge variant="secondary">Featured</Badge>*/}
        </CardAction>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.price} €</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">
          <Link href={"/product/" + product.id}>
            View
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
