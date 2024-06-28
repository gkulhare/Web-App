function Meme(){
    return(
        <img
            src="https://i.imgur.com/J0myYgH.jpeg"
            alt="Docker memes"
        />
    );
}

export default function Memes(){
    return(
        <section>
            <h1>
                Here are some memes
            </h1>
            <Meme/>
            <Meme/>
            <Meme/>
        </section>
    );
}