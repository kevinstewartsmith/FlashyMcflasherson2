import { Grid } from '@mui/material'
import FlashCard from './FlashCard'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const FlashCardList = ({data}) => {
    function deleteFlashCard() {
        console.log("FC UI Deleted card ID: " );
    

    }
    return (
        <div className='collection-feed'> 
            <Grid
                container
                //rowSpacing={1}
                spacing={0}
                //columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justify="space-evenly"
                alignItems="center"
            >
                { data.map((flashCard,idx) => (
                    <Grid item padding={2} xs={12} sm={6} md={4} key={idx}>
                        
                            <FlashCard 
                                key={flashCard._id}
                                id={flashCard._id}
                                front={flashCard.front}
                                back={flashCard.back}
                            />
                            <div
                                style={{
                                    width: "60%",
                                    height: "50%",
                                    backgroundColor: "blue",
                                    borderRadius: 30,
                                    marginTop: "90%",
                                }}
                            >
                                <DeleteOutlinedIcon className="delete-button" onClick={deleteFlashCard}/> 
                            </div>

                       
                    </Grid>
                ))} 
            </Grid>
        </div>   
    )
}

const FlashCardFeed = (props) => { return (<FlashCardList data={props.flashCardItems} />) }

export default FlashCardFeed