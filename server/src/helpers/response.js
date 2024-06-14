const getResponse = (res, message) => {
  return res.status(message.status).json({
    ...message.payload,
  });
};

export default getResponse;
