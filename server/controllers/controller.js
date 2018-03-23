require("dotenv").config();

module.exports = {
    
    getMenuItems: (req, res, next) => {
        req.app.get("db")
        .getMenuItems()
        .then(response => {
            res.status(200).json(response)
        }) .catch(err => {
            res.status(500).json(err);
        })
    },

    getFoodById: (req, res, next) =>{
       req.app.get("db")
       .getFoodById([req.params.id])
       .then(response => {
           console.log(response, "details")
           res.status(200).json(response)})
       .catch( () => res.status(500).json());
   },

    addMenuItem:  (req, res, next) => {
       req.app.get("db")
       .addMenuItem([req.body.id, req.body.name, req.body.price, req.body.details])
       .then(response => res.status(200).json(response))
       .catch( () => res.status(500).json())
   },

    deleteItem: (req, res, next) => {
       req.app.get("db")
       .deleteMenuItem([req.params.id])
       .then(response => res.status(200).json())
       .catch( () => res.status(500).json());
   }



}