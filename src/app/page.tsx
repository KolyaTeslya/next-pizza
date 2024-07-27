import { Title, Container, Categories, SortPopup, TopBar, Filters } from '@/components/shared';
import { ProductCard } from '@/components/shared/product-card';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              Список товаров
              {/* <ProductCard /> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
