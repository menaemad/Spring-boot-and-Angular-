package net.javaguides.springboot;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="USER")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="userName")
	private String username;
	
	@Column(name="Full_Name")
	private String fullName;
	
	//@ManyToOne
	//@JoinColumn(name="Childern_Id")
	//private User childern;

	public User() {
		
	}
	
	public User(Integer id, String username, String fullName){//, User childern) {
		super();
		this.id = id;
		this.username = username;
		this.fullName = fullName;
		//this.childern = childern;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	/*public User getChildern() {
		return childern;
	}

	
	public void setChildern(User childern) {
		this.childern = childern;
	}*/
	
	
}
