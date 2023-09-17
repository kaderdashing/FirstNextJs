import Image from "next/image";
import Header from "@/components/Header";
import SimpleCard from "@/components/Card/SimpleCard";

export default function Home() {
  return (
    <div className="">
      <Header  title="Bienvenu sur code.io" body="le blog communautaire des gens qui aime le developement" secondBody="un petit systéme créé par kader dashing"/>
      <div className="flex  space-x-14 justify-center mt-8	">
        <SimpleCard
          titel="listez les article"
          content="Maximize votre culture web"
          secondecontent="chaque auteur tente de vous aider a bien comprendre le web"
          links="/blog"
          namedLink="vers les blog"
        />
        <SimpleCard
          titel="faites un tour vers les membres"
          content="faite vous des amis"
          secondecontent="ajouter, discuter et parler avec les diffents mombre "
          links="/liste"
          namedLink="Decouvrer la liste des membres"
       />
      </div>
    </div>
  );
}
