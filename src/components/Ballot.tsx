import React, { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../store";
import { Instructions } from "./Instructions";
import { Message } from "./Message";
import { OptionElement } from "./OptionElement";
import { OptionList } from "./OptionList";
import { SelectedOptionElement } from "./SelectedOptionElement";

export const Ballot: React.FC = () => {
  const {
    list,
    selection,
    name,
    messageType,
    message,
    displayOptions
  } = useSelector((state: RootState) => state.preferenceReducer);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_REQUESTED", payload: { id } });
  }, [dispatch, id]);

  const handleSubmit = React.useCallback(() => {
    if (name) {
      dispatch({ type: "SUBMIT_REQUESTED" });
    } else {
      alert("You should write a name in, before submit");
    }
  }, [dispatch, name]);

  const handleNameChange = React.useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: "SET_NAME",
        payload: { name: event.target.value }
      });
    },
    [dispatch]
  );

  return (
    <div>
      <div>Id: {id}</div>
      <Message type={messageType} message={message} />
      {displayOptions && (
        <>
          <Instructions />
          <input type="text" value={name} onChange={handleNameChange} />
          <button onClick={handleSubmit}>Submit vote</button>

          <div style={{ display: "flex" }}>
            <OptionList list={list} elemView={OptionElement} />
            <OptionList list={selection} elemView={SelectedOptionElement} />
          </div>
        </>
      )}
    </div>
  );
};
