import dotenv from 'dotenv'
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Server running on port " + port);
});