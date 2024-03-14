import {useState, useEffect} from 'react';
import { Stack, Box, TextField, Button, Typography } from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

  // const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    getBodyPartsData();
  }, []);

  const getBodyPartsData = async () => {
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

    setBodyParts(['all', ...bodyPartsData]);   
  };

  // const handleSearch = async () => {
  //   if(search) {
  //     const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

  //     const searchedExercises = exercisesData.filter(
  //       (exercise) => exercise.name.toLowerCase().includes(search)
  //       || exercise.target.toLowerCase().includes(search)
  //       || exercise.equipment.toLowerCase().includes(search)
  //       || exercise.bodyPart.toLowerCase().includes(search)
  //     );

  //     setExercises('');
  //     setExercises(searchedExercises);

  //   }
  // };

  return (
    <Stack alignItems= "center" mt= "37px" justifyContent= "center" p= "20px">
      <Typography fontWeight={700} mb= "50px" textAlign= "center" sx={{fontSize: {lg: '44px', xs: '30px'}}}>
        Awesome Exercises You <br /> Should Know
      </Typography>
      <div>{bodyParts.length}</div>
      {/* <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
        {bodyParts.length > 0 ?<HorizontalScrollbar data= {bodyParts} bodyPart= {bodyPart} setBodyPart= {setBodyPart} isBodyParts /> :'Loading...'}
        
      </Box> */}
      {/* <Box position="relative" mb="72px">
        <TextField height= "76px" value={search} onChange={(e) => {setSearch(e.target.value.toLowerCase())}} placeholder="Search Exercises..." type= "text" sx={{input: {fontWeight: '700', border: 'none', borderRadius: '4px'}, width: {lg: '800px', xs: '350px'}, backgroundColor: '#FFF', borderRadius: '40px'}}/>
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box> */}
      
    </Stack>
  )
}

export default SearchExercises
