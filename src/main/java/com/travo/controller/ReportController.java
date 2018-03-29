package com.travo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by asus on 3/29/2018.
 */
@Controller
public class ReportController {

    @GetMapping("/report")
    public ModelAndView adminPage(ModelAndView mav){
        mav.setViewName("admin-page");
        return mav;
    }
}
