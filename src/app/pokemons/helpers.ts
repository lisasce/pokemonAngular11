export function urlGenerator():string{
    // @ts-ignore
    const num = (Math.floor(Math.random() * 893) + 13).toString().padStart(3,'0');
    const newUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${num}.png`;
    return newUrl;
}

export function idGenerator():number{
    const newId = Math.floor(Math.random() * 893) + 13;
    return newId;
}
