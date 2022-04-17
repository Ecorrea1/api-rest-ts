import express from 'express'
import path from 'path'
// require('dotenv').config();

// BD CONFIG
// require('./database/config_database').dbConnection();

const app = express();
app.use(express.json())

const PORT = 3000

const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath))

// //Rutas
// app.use('/api/login', require('./routers/auth.router'));
// app.use('/api/config', require('./routers/app-config.router'));
// app.use('/api/product', require('./routers/product.router'));
// app.use('/api/group', require('./routers/group.router'));
// app.use('/api/historic', require('./routers/historic.router'));
// app.use('/api/ubication', require('./routers/ubication.router'));
// app.use('/api/category', require('./routers/category.router'));
// app.use('/api/loan', require('./routers/loan.router'));
// app.use('/api/rol', require('./routers/roles.router'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));