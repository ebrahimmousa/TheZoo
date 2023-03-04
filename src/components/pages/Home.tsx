
import { useContext, useEffect, useState } from 'react'
import { AnimalContext } from '../../contexts/AnimalContext';
import { IAnimal } from '../../models/IAnimal';
import ShowAllAnimals from '../ShowAllAnimals';
import { StyledParagraph } from '../styledComponents/Text/StyledParagraphs';
import { FlexWrapperLg } from '../styledComponents/Wrappers/StyledWrappers';

export default function Home() {
    const animals = useContext(AnimalContext);
    const [allFed, setAllFed] = useState(false);
    const [hungryAnimals, setHungryAnimals] = useState<IAnimal[]>([]);

    useEffect(() => {
        const fed = animals.animals.every(animal => animal.isFed);
        setAllFed(fed)

        const num = animals.animals.filter((animal) => animal.isFed === false);
        setHungryAnimals(num)

    }, [animals.animals])

    return (
        <>
            <StyledParagraph
                bgColor="#dbcde3"
                fontSize="2rem"
                padding="10px 0px"
                queryDirection="row"
                queryDisplay="flex"
                queryJustify="center"
                queryPadding="15px 0px">
                {allFed ? "All The Animals Are Fed" :
                    "Right Now " + hungryAnimals.length + " Animal Are Hungry, Please Feed Them!"}
            </StyledParagraph>
            <FlexWrapperLg>
                <ShowAllAnimals />
            </FlexWrapperLg>
        </>
    )
}