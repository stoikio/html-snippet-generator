import { NextPage } from "next";
import BonASavoir from "components/snippets/BonASavoir";
import LeSaviezVous from "components/snippets/LeSaviezVous";
import CTA from "components/snippets/CTA";
import { useState } from "react";
import Input from "components/Input";
import Textarea from "components/Textarea";
import SnippetWrapper from "components/SnippetWrapper";
import Head from "next/head";

interface IndexProps {}

const Index: NextPage<IndexProps> = () => {
  const [title, setTitle] = useState("Hey I'm a title !");
  const [text, setText] = useState("Introduction Lorem ipsum dolor sit amet. Et commodi rerum quo sint aspernatur quo deleniti dolores et voluptatum asperiores non doloribus consectetur!");
  const [buttonText, setButtonText] = useState("Tester mon risque");
  const [buttonHref, setButtonHref] = useState("https://stoik.io");
  const [buttonId, setButtonId] = useState("");

  return (
    <>
      <Head>
        <title>HTML snippet generator | Stoïk</title>
      </Head>
      <div className="h-screen overflow-hidden flex flex-col md:flex-row">
        <div className="bg-gray-100 overflow-auto py-4 border-r border-gray-200 md:w-[300px] lg:w-[400px] px-8 space-y-2">
          <div className="font-semibold text-xl py-5 text-gray-700">
            <div className="flex flex-col items-center">
              <div className="text-center">
                <span className="bg-gradient-to-tr from-blue-500 to-indigo-500 text-white px-2 py-1 tracking-wide rounded font-black">HTML</span> snippet generator
              </div>
              <div className="text-sm font-normal text-gray-500 mt-1">by stoïk</div>
            </div>
          </div>
          <div>
            <div className="font-medium">Titre</div>
            <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <div className="font-medium">Texte</div>
            <Textarea value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <div>
            <div className="font-medium">Texte du bouton</div>
            <Input type="text" value={buttonText} onChange={(e) => setButtonText(e.target.value)} />
          </div>
          <div>
            <div className="font-medium">Lien du bouton</div>
            <Input type="text" value={buttonHref} onChange={(e) => setButtonHref(e.target.value)} />
          </div>
          <div>
            <div className="font-medium">
              Balise <pre className="inline-block bg-gray-200 px-2 rounded m-2 text-sm">id</pre> du bouton
            </div>
            <Input placeholder="Optionnel" type="text" value={buttonId} onChange={(e) => setButtonId(e.target.value)} />
          </div>
        </div>
        <div className="overflow-auto p-10 flex-1">
          <div className="space-y-5 flex flex-col items-center">
            <div className="text-gray-500 py-5 text-center">Cliquez sur un encart pour copier son code HTML dans le presse papier</div>
            <SnippetWrapper>
              <BonASavoir title={title} text={text} />
            </SnippetWrapper>
            <SnippetWrapper>
              <LeSaviezVous title={title} text={text} />
            </SnippetWrapper>
            <SnippetWrapper>
              <CTA title={title} text={text} buttonText={buttonText} buttonHref={buttonHref} buttonId={buttonId} />
            </SnippetWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
