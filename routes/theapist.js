const express = require('express');
const router = express.Router();
const { LearnerAuthenticateToken } = require('../middlewares/auth')

const { ApproveTherapiRequest } = require('../controllers/therapist/approveTherapiRequest');
router.post('/approve/therapist',LearnerAuthenticateToken, ApproveTherapiRequest);

const { GetNotification } = require('../controllers/therapist/listnotification');
router.post('/list/notification',LearnerAuthenticateToken, GetNotification);

const { EditProfile } = require('../controllers/therapist/editProfile');
router.post('/edit/profile',LearnerAuthenticateToken, EditProfile);

const { CreateBank, EditBank, GetBank } = require('../controllers/therapist/bank')
router.post('/bank/create', LearnerAuthenticateToken, CreateBank)
router.post('/bank/edit', LearnerAuthenticateToken, EditBank)
router.post('/bank', LearnerAuthenticateToken, GetBank)

const { UpdateBooking } = require('../controllers/users/booking.js');
router.post('/update/booking', UpdateBooking);

const { ListPaymentHistory } = require('../controllers/therapist/payment.js');
router.post('/list/payment-history',LearnerAuthenticateToken, ListPaymentHistory);

const { ListWalletHistory } = require('../controllers/therapist/wallethistory.js');
router.post('/list/wallet-history',LearnerAuthenticateToken, ListWalletHistory);

const { WithdrawRequest } = require('../controllers/therapist/withdrawRequest.js');
router.post('/request-withdraw',LearnerAuthenticateToken, WithdrawRequest);

const { CheckTherapyOTP } = require('../controllers/therapist/CheckTherapyOtp.js');
router.post('/verify/therapy-otp',LearnerAuthenticateToken, CheckTherapyOTP);


//payment Gateway

const { Payment } = require('../controllers/therapist/payment.js');
router.post('/payment', Payment);

const { RazorpayCallback } = require('../controllers/therapist/razorpaycallback.js');
router.post('/razorpay/callback', RazorpayCallback);

module.exports=router