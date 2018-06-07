package com.njlt.fwcup.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.njlt.fwcup.common.InteractiveWithAjax;

@Controller
public class UserController {

	@RequestMapping(value="/footGuess.do",method=RequestMethod.POST)
	public void footGuess(HttpServletRequest request,HttpServletResponse response,
			@RequestParam(value="jieg",required=true)String jieg){
		JSONObject json = new JSONObject();
		System.out.println(jieg);
		json.put("jieg", jieg);
		json.put("result", "success");
		InteractiveWithAjax.printWriter(json, response);
	}
}
