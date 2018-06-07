package com.njlt.fwcup.common;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public abstract class InteractiveWithAjax {
	protected static final Log LOG = LogFactory
			.getLog(InteractiveWithAjax.class);
    /**
     * 
     * 方法说明:前后台交互时，返回对象
     * 创建人:yw
     * 创建时间:2015-11-02
     * @param o
     * @param response
     */
	public static void printWriter(Object o, HttpServletResponse response) {
		PrintWriter out = null;
		response.setContentType("text/html;charset=utf-8");
		try {
			out = response.getWriter();
			if (o != null) {
				out.print(o);
			} else {
				out.print("");
			}
		} catch (IOException e) {
			LOG.error("Ajax 与前台交互失败", e);
		} finally {
			try {
				if (out != null) {
					out.close();
				}
			} catch (Exception e) {
				LOG.error("流关闭失败", e);
			}
		}
	}
}
