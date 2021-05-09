import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: "2rem",
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

const Gallery = ({ results }) => {
  const classes = useStyles();
  console.log(results);

  return(
    <div className={classes.root}>
    <GridList cellHeight={180} className={classes.gridList}>
    {  results.map((gif, key) => (
      <GridListTile key={key}>
        <img src={gif.images.original.url} alt={"alt"} />
      </GridListTile>
    ))}
  </GridList>
  </div>
  )
};

export default Gallery;
