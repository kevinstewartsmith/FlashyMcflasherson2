import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Note from '../CollectionUI/note'
import FlashCard from './FlashCard'

const FlashCardList = ({data}) => {
    
    return (
        <div className='collection-feed'> 
            <Grid
                container
                //rowSpacing={1}
                spacing={2}
                //columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justify="space-evenly"
                alignItems="center"
            >       
                {data.map((flashCard,idx) => (
                    <Grid key={idx} item padding={1} xs={4} >
                        <Note
                            key={idx}
                            id={flashCard._id}
                            collectionName={flashCard.front}
                            description={flashCard.back}
                            //onClick={() => { navigate("/collections/" + collection._id,  { state: { collectionName: collection.name }}) }}
                            //onDelete={collectionChanged}
                        />
                    </Grid>
                ))}
            </Grid> 
            <Grid
                container
                //rowSpacing={1}
                spacing={5}
                //columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justify="space-evenly"
                alignItems="center"
            >
                { data.map((flashCard,idx) => (
                    <Grid item padding={1} xs={4} key={idx}>
                        <FlashCard 
                            key={flashCard._id}
                            id={flashCard._id}
                            front={flashCard.front}
                            back={flashCard.back}
                        />  
                    </Grid>
                ))} 
            </Grid>
        </div>   
    )
}

const FlashCardFeed = (props) => {
    const [flashCardItems,setFlashCardItems] = useState(props.flashCardItems);
    const [practiceMode, setPracticeMode] = useState(true)
 //   const [flashCardItems,setFlashCardItems] = useState(props.flashCardItems);

    // useEffect(() => {
    //     fetchCollections()
    // },[]);

    // const fetchCollections = async () => {
    //     const res = await fetch(`/api/collection/gallery/${props.collectionID}/flashcards`)
    //     const data = await res.json()
    //     console.log(data);
    //     setFlashCardItems(data)
    // }

  return (
    <>
        {/* { props.practiceMode ? <h1>practiceMode</h1> :<FlashCardList data={flashCardItems} /> } */}
        {/* { props.practiceMode ? <h1>practiceMode</h1> :<FlashCardList data={props.flashCardItems} /> } */}
        <FlashCardList data={props.flashCardItems} />
    </>
    
  )
}

export default FlashCardFeed