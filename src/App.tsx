import { useState } from 'react';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import ParcoursProfessionnel from './Components/ParcoursProfesionnel/ParcoursProfessionnel';
import ParcoursScolaire from './Components/ParcoursScolaire/ParcoursScolaire';

interface Props {
  window?: () => Window;
}

function App(props: Props) {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemSelected = (selectedItem: string) => {
    console.log(`Selected item: ${selectedItem}`);
    setSelectedItem(selectedItem);
  };

  return (
    <main>
      <Navbar selectedItem={handleItemSelected} {...props} />
      {selectedItem === "" && <ParcoursScolaire />}
      {selectedItem === "Parcours Scolaire" && <ParcoursScolaire />}
      {selectedItem === "Parcours Professionnel" && <ParcoursProfessionnel />}
      {selectedItem === "Contactez-moi" && <Contact />}

    </main>
  );
}

export default App;
