"use strict";

const fun = () => {
  try {
    const a = 2;
    a = 3;
  } catch (err) {
    console.log(err);
    console.error(err);
    console.warn(err);
    console.table(err);

    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
  }
};

fun();

const customError = () => {
  try {
    throw new Error("custom error");
  } catch (err) {
    console.log(err.stack);
  } finally {
    console.log("no matter what is executed");
  }
};

customError();
