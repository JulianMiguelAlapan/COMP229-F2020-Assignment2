let express = require('express');
let router = express.Router();

let businessContactsController = require('../controllers/businessContacts');

/* GET Business Contacts-list page. READ */
router.get('/', businessContactsController.DisplayBusinessContactsList);
  
/* GET Display Add page. CREATE  */
router.get('/add', businessContactsController.DisplayAddPage);

/* POST process the Add page. CREATE */
router.post('/add', businessContactsController.ProcessAddPage);

/* GET Display Edit page. UPDATE */
router.get('/edit/:id', businessContactsController.DisplayEditPage);

/* POST process the Edit page. UPDATE */
router.post('/edit/:id', businessContactsController.ProcessEditPage);

/* GET process the Delete page. DELETE */
router.get('/delete/:id', businessContactsController.ProcessDeletePage);


module.exports = router;