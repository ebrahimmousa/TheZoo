import { IAnimal } from "../models/IAnimal";

const localStorageKey = "Animals";

export const toggleHungry = (animal: IAnimal) => {
    animal.isFed = !animal.isFed;
    animal.lastFed = new Date().toString();
}

export const getHoursSinceFed = (animal: IAnimal) => {
    return Math.floor((new Date().getTime() - new Date(animal.lastFed).getTime()) / (1000 * 60 * 60));
}

export const setLocalStorage = (list: IAnimal[]) => {
    localStorage.setItem(localStorageKey, JSON.stringify(list));
}

export const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem(localStorageKey) || "[]");
}