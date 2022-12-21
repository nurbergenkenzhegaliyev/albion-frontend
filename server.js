
import path from 'path'
import express from 'express';


const PORT =  5000;

const app = express();


const __dirname = path.resolve();
app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})


app.listen(5000);