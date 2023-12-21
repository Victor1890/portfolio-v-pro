import UPI from '@components/SVG/UPI';
import {
  FadeContainer,
  fromTopVariant,
  popUp,
} from '@content/FramerMotionVariants';
import support from '@content/support';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '@context/darkModeContext';
import QRCode from 'react-qr-code';
import { BiRupee } from 'react-icons/bi';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FiInfo } from 'react-icons/fi';
import { lockScroll, removeScrollLock } from '@utils/functions';
import AnimatedDiv from '@components/FramerMotion/AnimatedDiv';

export default function Support() {
  const [showUPIForm, setShowUPIForm] = useState(false);

  return (
    <section>
      <h3 className='my-5 text-2xl font-bold'>Support me 💪</h3>

      <AnimatedDiv
        variants={FadeContainer}
        className='grid gap-5 sm:grid-cols-3'
      >
        {support.map((paymentMethod) => {
          return (
            <Link
              target='_blank'
              rel='noopener noreferrer'
              key={paymentMethod.name}
              href={paymentMethod.url}
            >
              <motion.p
                variants={popUp}
                className='group grid place-items-center rounded-xl bg-white p-5 text-darkSecondary shadow ring-gray-500 duration-200 hover:ring-1 active:ring dark:bg-darkSecondary dark:text-gray-300'
              >
                <div className='flex select-none flex-col items-center gap-5'>
                  <paymentMethod.Icon className='text-3xl duration-150 group-hover:lg:scale-150 ' />

                  <p className='text-sm font-semibold'>{paymentMethod.name}</p>
                </div>
              </motion.p>
            </Link>
          );
        })}
        <motion.button
          variants={popUp}
          onClick={() => {
            setShowUPIForm(!showUPIForm);
            lockScroll();
          }}
          className='group grid place-items-center rounded-xl bg-white p-5 text-darkSecondary shadow ring-gray-500 duration-200 hover:ring-1 active:ring dark:bg-darkSecondary dark:text-gray-300'
        >
          <div className='flex select-none flex-col items-center gap-5'>
            <UPI className='text-3xl duration-150 group-hover:lg:scale-150 ' />
            <p className='text-sm font-semibold'>UPI</p>
          </div>
        </motion.button>
      </AnimatedDiv>
      <AnimatePresence>
        {showUPIForm && (
          <UPIPaymentForm
            close={() => {
              setShowUPIForm(false);
              removeScrollLock();
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function UPIPaymentForm({ close }: { close: () => void }) {
  const [amount, setAmount] = useState(0);
  const [qrValue, setQrValue] = useState('');

  const { isDarkMode } = useDarkMode();

  const generatePaymentQR = (e: FormEvent) => {
    e.preventDefault();
    setQrValue(
      `upi://pay?pa=${process.env.NEXT_PUBLIC_UPI}&pn=Jatin%20Sharma&am=${amount}&purpose=nothing&cu=INR`
    );
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={FadeContainer}
      className='fixed inset-0 z-50 grid place-items-center bg-black/70'
    >
      <motion.div
        initial='hidden'
        animate='visible'
        variants={fromTopVariant}
        exit='hidden'
        className='relative m-5 w-[90%]  max-w-md rounded-lg bg-white px-5 py-5 dark:bg-darkSecondary'
      >
        <button title='Back' onClick={close}>
          <IoMdArrowRoundBack className='icon m-0' />
        </button>

        {!qrValue ? (
          <>
            <form
              onSubmit={generatePaymentQR}
              className='my-5 mb-10 flex flex-col gap-5'
            >
              <div className='relative flex items-center justify-center'>
                <BiRupee className='-ml-1 h-full w-9 text-gray-600 dark:text-gray-200' />
                <input
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.value.length === 0)
                      return (e.target.style.width = '3ch');
                    if ((e.target as HTMLInputElement).value.length > 7) return;
                    e.target.style.width = e.target.value.length + 'ch';
                  }}
                  title='Enter amount'
                  id='amount'
                  className='w-[3ch] rounded-lg bg-transparent text-2xl font-bold text-gray-600 outline-none dark:text-gray-200 dark:placeholder-gray-400'
                  type='number'
                  name='amount'
                  placeholder='500'
                  min='100'
                  max='10000'
                  required
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                />
              </div>
              <input type='submit' value='' hidden />
            </form>

            {amount >= 100 && (
              <motion.button
                onClick={generatePaymentQR}
                initial='hidden'
                animate='visible'
                variants={popUp}
                type='submit'
                className='clickable_button mx-auto flex w-9/12 justify-center rounded-lg bg-black px-4 py-1.5 font-semibold text-white dark:bg-white dark:text-black sm:w-1/2'
              >
                Pay{' '}
                {amount && (
                  <span className='ml-2 line-clamp-1'>&#8377; {amount}</span>
                )}
              </motion.button>
            )}
          </>
        ) : (
          <AnimatedDiv
            variants={FadeContainer}
            className='flex flex-col items-center'
          >
            <QRCode
              className='mx-auto scale-75'
              id='QRCode'
              value={qrValue}
              bgColor={isDarkMode ? '#25282a' : 'white'}
              fgColor={isDarkMode ? 'white' : '#25282a'}
            />

            <div className='my-5 flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-200'>
              <FiInfo className='h-5 w-5' />
              <p className='text-xs'>Scan the QR code via any UPI app </p>
            </div>
          </AnimatedDiv>
        )}
      </motion.div>
    </motion.div>
  );
}
