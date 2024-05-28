import { Header } from "@/src/Header";
import { MenuFilter } from "@/src/MenuFilter";
import { ReactCard } from "@/src/ReactCard";
import { REACT_CARDS } from "@/src/react_card";

export default function Home({ searchParams }) {
  const currentFilter = searchParams.filter;
  const filters = [...new Set(REACT_CARDS.map((c) => c.category))]; //on recuperer le map dans un tableau, et on fait new set pour trier et avoir que des valeur differente.

  console.log(filters, currentFilter);

  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <div className="mb-4 mt-8 py-2 flex flex-1 gap-4 overflow-auto max-lg:flex-col">
        <MenuFilter currentFilter={currentFilter} filters={filters} />
        <div className="size-full overflow-auto">
          <div className="grid h-fit grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-4">
            {REACT_CARDS.filter((card) => {
              if (!currentFilter) return true;
              return card.category === currentFilter;
            }).map((card) => (
              <ReactCard
                hideCategory={currentFilter}
                card={card}
                key={card.name}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
