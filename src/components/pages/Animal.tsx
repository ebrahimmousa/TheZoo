
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { AnimalContext } from '../../contexts/AnimalContext';
import { IAnimal } from '../../models/IAnimal';
import { getHoursSinceFed, getLocalStorage } from '../../utils/Utils';
import { StyledButton } from '../styledComponents/Buttons/StyledButtons';
import { SmallHeading } from '../styledComponents/Headings/StyledHeadings';
import { StyledLoader } from '../styledComponents/Loader/StyledLoader';
import { StyledParagraph } from '../styledComponents/Text/StyledParagraphs';
import { SingleImageWrapper, SinglePageWrapperLg, SinglePageWrapperSm } from '../styledComponents/Wrappers/StyledWrappers';

window.scrollTo(0, 0)

export default function Animal() {
    let animals = useContext(AnimalContext);
    const [specificAnimal, setSpecificAnimal] = useState<IAnimal>(
        {
            id: 0,
            imageUrl: "",
            isFed: false,
            lastFed: "",
            latinName: "",
            longDescription: "",
            medicine: "",
            name: "",
            shortDescription: "",
            yearOfBirth: 0,
        }
    );
    const [disabled, setDisabled] = useState(false);
    const params = useParams();
    const year = new Date().getFullYear();
    const date = new Date(specificAnimal.lastFed).toLocaleDateString() + " Hour " + new Date(specificAnimal.lastFed).toLocaleTimeString();

    /* noImage */
    const checkBgImage = (animal: IAnimal) => {
        if (animal.id === 1) {
            return "/assets/cat.jpg";
        } else if (animal.id === 2) {
            return "/assets/dog.jpg";
        } else if (animal.id === 8) {
            return "/assets/hours.jpg";
        } else {
            return animal.imageUrl;
        }
    }

    // Loader
    const loaderHTML = (
        <>
            <StyledLoader>
            </StyledLoader>

        </>
    )

    useEffect(() => {
        if (animals.animals.length > 0) {
            for (let i = 0; i < animals.animals.length; i++) {
                if (animals.animals[i].id.toString() === params.id) {
                    setSpecificAnimal(animals.animals[i]);
                }
            }

        } else {
            const animalStorage: IAnimal[] = getLocalStorage();
            for (let i = 0; i < animalStorage.length; i++) {
                if (animalStorage[i].id.toString() === params.id) {
                    setSpecificAnimal(animalStorage[i]);
                }
            }
        };
    });

    useEffect(() => {
        if (specificAnimal.isFed === true) {
            setDisabled(true);
        }

        let hoursSinceFed = getHoursSinceFed(specificAnimal);

        if (hoursSinceFed >= 3) {
            setDisabled(false)
            animals.feedAnimal(specificAnimal)
        }
    }, [specificAnimal.isFed])

    const feedAnimal = (a: IAnimal) => {
        animals.feedAnimal(a)
        setDisabled(true);
    };

    return (
        <>
            <StyledParagraph
                padding="10px 0px"
                queryPadding="20px 0px"
                queryJustify="center"
                queryAlign="center">
                <Link to="/">Back To Animals Page</Link>
            </StyledParagraph>

            {animals.loader ? loaderHTML :
                <SinglePageWrapperLg>
                    <SingleImageWrapper>
                        <img
                            src={checkBgImage(specificAnimal)}
                            alt={specificAnimal.name} />
                    </SingleImageWrapper>

                    <SinglePageWrapperSm>
                        <SmallHeading
                            fontSize="3 rem">{specificAnimal.name}
                        </SmallHeading>

                        {specificAnimal.isFed ?
                            <StyledParagraph
                                queryDirection="row"
                                justify="center"
                                queryJustify="flex-start"
                                padding="0px"
                                fontSize="2rem"
                                align="center">
                                {specificAnimal.name} Is For The Time Fed
                            </StyledParagraph> :

                            <StyledParagraph
                                queryDirection="row"
                                padding="0px"
                                justify="center"
                                queryJustify="flex-start"
                                fontSize="2rem"
                                align="center">
                                {specificAnimal.name} Is Hungry
                            </StyledParagraph>
                        }

                        {specificAnimal.isFed && (
                            <>
                                <StyledParagraph
                                    padding="0px"
                                    fontSize="2rem"
                                    align="center"
                                    queryAlign="left">
                                    {specificAnimal.name} Last Fed: {date}
                                </StyledParagraph>
                                <StyledParagraph
                                    padding="0px"
                                    fontSize="2rem"
                                    align="center"
                                    queryAlign="left">
                                    {specificAnimal.isFed && ("The Animal Can Be Fed Every 3 Hours")}
                                </StyledParagraph>
                            </>
                        )
                        }
                        < StyledButton
                            onClick={(() => { feedAnimal(specificAnimal) })}
                            disabled={disabled}>
                            {specificAnimal.isFed ? specificAnimal.name + " Is Fed" : "Feed " + specificAnimal.name}</StyledButton>
                        <SmallHeading
                            fontSize="2rem"
                            padding="10px 0px 0px">
                            More About {specificAnimal.name}
                        </SmallHeading>
                        <StyledParagraph
                            align="left"
                            padding="0px"
                            queryDirection="column"
                            queryAlign="left">
                            <span>Age: {year - specificAnimal.yearOfBirth} Year</span>
                            <span>Medicins: {specificAnimal.medicine} </span>
                            <span>Latin Name: {specificAnimal.latinName}</span>
                        </StyledParagraph>
                        <StyledParagraph
                            align="left"
                            padding="0px">
                            {specificAnimal.longDescription}
                        </StyledParagraph>
                    </SinglePageWrapperSm>
                </SinglePageWrapperLg>}
        </>
    )
}